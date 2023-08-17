import { languageKeys, languageToHreflang } from "./datas";
import type { LanguageKey } from "./types";

const REGEX_ACCEPT_LANGUAGE_SPLIT = /;|,/;

// Root Slug Detector
type DetectorParametersURL = { pathname: string };

const rootSlugDetector = (url: DetectorParametersURL): LanguageKey[] => {
  const detectedHreflang = url.pathname.split("/").at(1);
  if (!detectedHreflang) return [];

  const correspondingLangKey = (Object.keys(languageToHreflang) as LanguageKey[]).find(key => languageToHreflang[key] === detectedHreflang.toLowerCase());

  if (correspondingLangKey) {
      return [correspondingLangKey];
  } else {
      return [];
  }
};

const initRootSlugDetector = (url: DetectorParametersURL) => {
    return () => rootSlugDetector(url);
};

// Accept Language Header Detector
type HeadersObject = { get: (key: string) => string | null };
type DetectorParametersHeaders = HeadersObject;

const acceptLanguageHeaderDetector = (headers: DetectorParametersHeaders): string[] => {
    return (headers.get("Accept-Language") || "")
        .split(REGEX_ACCEPT_LANGUAGE_SPLIT)
        .filter((part) => !part.startsWith("q"))
        .map((part) => part.trim().toLowerCase())  // toLowerCase를 추가하여 hreflang과 일치시킵니다.
        .filter((part) => part !== "*")
        .filter(Boolean);
};

const initAcceptLanguageHeaderDetector = (headers: DetectorParametersHeaders) => {
    return () => acceptLanguageHeaderDetector(headers);
};

// Combining the Detectors to Detect LanguageKey
export const detectLanguageOrFallback = async (
    url: DetectorParametersURL,
    headers: DetectorParametersHeaders,
    referenceLanguage: LanguageKey
): Promise<LanguageKey> => {
    const detectors = [];
    if (url?.pathname) {
        detectors.push(initRootSlugDetector(url));
    }

    if (headers) {
        detectors.push(initAcceptLanguageHeaderDetector(headers));
    }

    try {
        for (const detector of detectors) {
            const detectedLangs = detector();
            for (const lang of detectedLangs) {
                if (languageKeys.includes(lang as LanguageKey)) {
                    return lang as LanguageKey;
                }
            }
        }
        return referenceLanguage;
    } catch (e) {
        console.error(e);
        return referenceLanguage;
    }
};
