export type { FormProps } from "@/pages/builder/data-form.tsx";

export const mockCVApi = {
    saveData: async (data: FormProps): Promise<{ editKey: string }> => {
        const editKey = Math.random().toString(36).substring(2, 10);
        localStorage.setItem(`cv_data_${editKey}`, JSON.stringify(data));
        return new Promise((resolve) => setTimeout(() => resolve({ editKey }), 300));
    },

    getCVData: async (editKey: string): Promise<FormProps | null> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const stored = localStorage.getItem(`cv_data_${editKey}`);
                resolve(stored ? JSON.parse(stored) as FormProps : null);
            }, 300);
        });
    },
};
