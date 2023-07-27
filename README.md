# Atomic pattern

```
    hot-topic-news/
    |- src/
        |- components/
            |- atoms/                 // 원자(Atoms) 컴포넌트들
                |- Button.svelte
                |- Input.svelte
                |- ...
            |- molecules/             // 분자(Molecules) 컴포넌트들
                |- LoginForm.svelte
                |- HeaderMenu.svelte
                |- ...
            |- organisms/            // 조직(Organisms) 컴포넌트들
                |- Header.svelte
                |- Sidebar.svelte
                |- ...
            |- templates/            // 템플릿(Templates) 컴포넌트들
                |- DefaultLayout.svelte
                |- ...
        |- routes/                   // 라우트와 페이지(Pages) 컴포넌트들
            |- +layout.svelte        // 전체 사이트 레이아웃
            |- +page.svelte          // 메인 페이지
            |- ...
    |- static/                      // 정적 파일들 (이미지, CSS 등)
    |- svelte.config.js             // Svelte 설정 파일
    |- package.json                 // 프로젝트 정보와 의존성 관리
    |- ...
```
