const textarea = document.querySelector('textarea');

const value = textarea.value;

value
    .toLowerCase()
    .split('\n')
    .filter(Boolean)
    .forEach((text, i) => {
        const items = text.split('_');
        const tick = '✅';

        const camelCase = items
            .map((item, index) =>
                index ? item[0].toUpperCase() + item.substring(1) : item,
            )
            .join('');

        console.log(
            camelCase,
            new Array(i + 1)
                .fill(null)
                .map(() => tick)
                .join(''),
        );
    });
