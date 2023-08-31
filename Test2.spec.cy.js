describe("creating info", () => {
    it("should create booking",() => {
        cy.request({
            method: "PUT",
            url: "https://restful-booker.herokuapp.com/booking/791",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Basic YWRtaW46cGFzc3dvcmQxMjM="
            },
            body:{
                "firstname" : "Eric",
                "lastname" : "Vandersloot",
                "totalprice" : 111,
                "depositpaid" : true,
                "bookingdates" : {
                    "checkin" : "2018-01-01",
                    "checkout" : "2019-01-01"
                },
                "additionalneeds" : "Extra pillows please"
        }
        })
    })
})