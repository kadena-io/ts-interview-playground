export async function time(fn: Function): Promise<{ value?: any, error?: any, elapsed: number }> {
    const start = Date.now();
    try {
        const value = await fn();
        const elapsed = Date.now() - start;
        return { value, elapsed };
    } catch(error) {
        const elapsed = Date.now() - start;
        return { error, elapsed };
    }
}
