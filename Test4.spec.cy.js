describe("updating info", () => {
    it("should update booking",() => {
        cy.request({
            method: "PUT",
            url: "https://restful-booker.herokuapp.com/booking/229",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Basic YWRtaW46cGFzc3dvcmQxMjM="
            },
            body:{
                "firstname" : "Josh",
                "lastname" : "Allen",
                "totalprice" : 111,
                "depositpaid" : true,
                "bookingdates" : {
                    "checkin" : "2018-01-01",
                    "checkout" : "2019-01-01"
                },
                "additionalneeds" : "less interceptions"
        }
        })
    })
})