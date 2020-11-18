
export interface CurrentWeather {
    weather: Array<Weather>,
    main: Main,
    dt?: number,
    name?: string
}

export interface Weather {
    id: number,
    main: string,
    description: string,
    icon: string
}

export interface Main {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    humidity: number
}

export interface CurrentWeatherState {
    currentTemperature: number,
    minTemperature: number,
    maxTemperature: number,
    description: string,
    dateTime?: string
}
export interface WeatherForecast {
    daily: Array<Daily>
}

export interface Daily {
    temp: Temp,
    weather: Weather,
    dt: number
}

export interface Temp {
    day: number,
    min: number,
    max: number
}

export interface TimePlace {
    dt: string,
    location: string
}

