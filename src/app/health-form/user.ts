export interface User {
    assement: string,
    bodyRegion: Array<[]>,
    description: string,
    patientTime: Array<{
        scheduleName: string,
        scheduleTime: Date,
    }>
}
