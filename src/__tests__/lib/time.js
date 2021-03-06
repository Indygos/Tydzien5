import {getMinutesAndSecondsFromDurationInSeconds} from "../../lib/time"
describe('for durstions shorter than one minute', () => {
    it("works for 30 seconds", () => {
        expect(
            getMinutesAndSecondsFromDurationInSeconds(30)
        ).toEqual([0, 30])
    })
    
    it("returns 30 seconds for 30 seconds-duration", () => {
        expect(
            getMinutesAndSecondsFromDurationInSeconds(30)[1]
        ).toBe(30)
    })
    
    it("returns 0 minutes for 30 seconds-duration", () => {
        expect(
            getMinutesAndSecondsFromDurationInSeconds(30)[0]
        ).toBe(0)
    })
});
    
describe('for durstions longer than one minute', () => {
    it("works for 140 seconds", () => {
        expect(
            getMinutesAndSecondsFromDurationInSeconds(140)
        ).toEqual([2, 20])
    });
})
