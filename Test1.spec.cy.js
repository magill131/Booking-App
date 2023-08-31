describe("getting info", () => {
    it("should get booking",() => {
        cy.request({
            method: "GET",
            url: "https://restful-booker.herokuapp.com/booking/7",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body:{
                "firstname" : "Sally",
                "lastname" : "Ericsson",
                "totalprice" : 905,
                "depositpaid" : true,
                "bookingdates" : {
                    "checkin" : "2015-08-17",
                    "checkout" : "2018-02-10"
                },
        }
        })
    })
})