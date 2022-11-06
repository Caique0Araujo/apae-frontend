const _news =
[
    {
        "id_news": 1,
        "title": "O título da matéria 1",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sint quisquam omnis. Dicta facilis in et numquam esse rerum, nobis quo, officiis suscipit, totam consequatur quis perferendis quae accusantium odit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sint quisquam omnis. Dicta facilis in et numquam esse rerum, nobis quo, officiis suscipit, totam consequatur quis perferendis quae accusantium odit!",
        "created_at_utc": "2022-12-15T15:30:20",
        "image_path": "O caminho para a imagem",
    },
    {
        "id_news": 2,
        "title": "O título da matéria 2",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sint quisquam omnis. Dicta facilis in et numquam esse rerum, nobis quo, officiis suscipit, totam consequatur quis perferendis quae accusantium odit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sint quisquam omnis. Dicta facilis in et numquam esse rerum, nobis quo, officiis suscipit, totam consequatur quis perferendis quae accusantium odit!",
        "created_at_utc": "2022-11-14T15:30:20",
        "image_path": "O caminho para a imagem",
    },
];

export async function getMostRecentNews(start, end) {
    return _news;
}