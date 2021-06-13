class University {
    constructor(
        id = 0,
        name,
        country = "India",
        countryCode = 'IN',
        state,
        web_pages = [''],
        domains = [''],
    ) {
        this.id = id;
        this.name = name;
        this.country = country;
        this.countryCode = countryCode;
        this.state = state;
        this.web_pages = web_pages;
        this.domains = domains;
    }
}

export default University;