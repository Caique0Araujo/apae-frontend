export async function getMostRecentNews(start, end) {
    const result = await fetch(`http://localhost:3333/news/recents/${start}/${end}`);
    if (result.status != 200) {
        return [];
    }

    const json = await result.json();
    return json;
}