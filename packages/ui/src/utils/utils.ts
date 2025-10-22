export const clipboard = {
  copy: async (text: string): Promise<void> => {
    await navigator.clipboard.writeText(text);
  },
};
