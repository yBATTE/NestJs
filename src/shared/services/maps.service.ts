export class GoogleMapsService {
    constructor() {}

    async createMaps(address: string) {
        const encodedAddress = encodeURIComponent(address);
        const iframe = `<iframe width='600' height='450' style='border:0' Loading='lazy' allowfullscreen src='https://www.google.com/maps/embed/v1/search?q=${encodedAddress}&key=AIzaSyAjwrV54mJOhg8XOoqHaXgW-qQFcV7SjVs'></iframe>`
        return iframe;
    }
}