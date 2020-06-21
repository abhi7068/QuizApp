import expect from "expect";
import questionReducer from "../questionReducer";
import * as actionTypes from "../../actions/actionTypes";
 
const initialState = {
      quiz:[]
};
 
describe("actions", () => {
    it("default ", () => {
        expect(
            questionReducer(initialState, {
                type: "default",

            })
        ).toEqual(initialState);
    });
    it("add quiz details ", () => {
        expect(
            questionReducer(initialState, {
                type:actionTypes.ADD_QUESTION,
                question: "quiz"
            })
        ).toEqual({
            ...initialState,
            quiz: ["quiz"]
        });
    });
})