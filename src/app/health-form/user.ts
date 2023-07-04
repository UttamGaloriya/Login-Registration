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
                    assessmentName: string
                }
            ]>

        }
    ]>
}
