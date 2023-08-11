import os


def get_language_codes(directory):
    language_codes = {}
    for date_dir in os.listdir(directory):
        date_path = os.path.join(directory, date_dir)
        for article_dir in os.listdir(date_path):
            article_path = os.path.join(date_path, article_dir)
            languages = [filename.split('.')[0] for filename in os.listdir(article_path) if filename.endswith('.md')]
            language_codes[article_dir] = languages
    return language_codes

def append_candid_languages(directory, language_codes):
    for date_dir in os.listdir(directory):
        date_path = os.path.join(directory, date_dir)
        for article_dir in os.listdir(date_path):
            article_path = os.path.join(date_path, article_dir)
            languages = language_codes.get(article_dir, [])

            # 각 언어 파일을 순회하며 candidLanguages 추가
            for filename in os.listdir(article_path):
                if filename.endswith('.md'):
                    filepath = os.path.join(article_path, filename)
                    with open(filepath, 'r') as file:
                        lines = file.readlines()
                        frontmatter_end_index = lines.index('---\n', 1)
                        lines.insert(frontmatter_end_index, f'candidLanguages: {languages}\n')

                    with open(filepath, 'w') as file:
                        file.write(''.join(lines))


directory = './data'
language_codes = get_language_codes(directory)  # 이전에 정의한 함수
append_candid_languages(directory, language_codes)