export async function getDataFromReddit(page, number) {
  const response = await fetch(
    `https://www.reddit.com/r/all/top/.json?t=all&limit=${number}`,
  );
  const responseParse = await response.json();
  return responseParse;
}
