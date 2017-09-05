export async function* skip<T>(
  source: AsyncIterable<T>,
  count: number
): AsyncIterable<T> {
  for await (const item of source) {
    if (count-- <= 0) {
      yield item;
    }
  }
}