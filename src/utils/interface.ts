export interface IAppLogo {
    height: string
    width: string
}

export interface IInsights {
    insight: {
        img: string
        category: string
        title: string
        date: string
    }
}

export interface IContactLocation {
    address: string,
    number: string,
    email: string
    heading: string
}