export interface User {
    id: number
    assement: string,
    bodyRegion: Array<[]>,
    description: string,
    patientTime: Array<{
        scheduleName: string,
        scheduleTime: Date,
    }>
    patient: Array<[
        {
            categoryName: string,
            category: Array<[
                {
                    assessmentName: string,
                    type: string,
                    unite: string,
                    range: {
                        rangeMin: number
                        rangeMax: number
                    },
                    compersion?: string,
                    measurements: string[],
                    measuringRegion: string,
                    referenceRegion?: string
                    goals: {
                        simple?: { key: string, value: number },
                        error?: { key: string, value: number },
                        difference?: { key: string, value: number },
                        comparsion?: { key: string, value: number },
                    }
                    routine: string[],
                    times: string[]
                }
            ]>

        }
    ]>
}
