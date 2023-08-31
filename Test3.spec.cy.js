describe("deleting info", () => {
    it("should delete booking",() => {
        cy.request({
            method: "DELETE",
            url: "https://restful-booker.herokuapp.com/booking/212",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Basic YWRtaW46cGFzc3dvcmQxMjM="
            },
     body:{
            "firstname": "John",
            "lastname": "Smith",
            "totalprice": 111,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2018-01-01",
                "checkout": "2019-01-01"
            },
            "additionalneeds": "Breakfast"
        }
        })
    })
})