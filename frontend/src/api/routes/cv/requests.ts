import {apiClient} from "@/api/axios.ts";
import type {FormProps} from "@/pages/builder/data-form.tsx";


const cv = apiClient.create({
    url: "/cv"
})


export const cvApi = {
    saveData: async (data: FormProps) => cv.post("", {data}), // returns edit key

    getCVData: async (editKey: string) => cv.get(`${editKey}`), // returns the cv data
}