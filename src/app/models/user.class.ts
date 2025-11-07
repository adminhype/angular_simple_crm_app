export class UserClass {
    firstName: string;
    lastName: string;
    email: string;
    birthDate: number;
    zipCode: number;
    city: string;

    constructor(obj?: any) {
        this.firstName = obj ? obj.firstName : '';
        this.lastName = obj ? obj.lastName : '';
        this.email = obj ? obj.email : '';
        this.birthDate = obj ? obj.birthDate : '';
        this.zipCode = obj ? obj.zipCode : '';
        this.city = obj ? obj.city : '';
    }
    public toJson() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            birthDate: this.birthDate,
            zipCode: this.zipCode,
            city: this.city,
        };
    }
}
