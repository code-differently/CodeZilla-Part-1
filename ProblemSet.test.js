
const ProblemSet = require('./ProblemSet.js');

test("timeConvert test01", () => {

    let problem = new ProblemSet();
    let expected = "2:6";

    let actual = problem.timeConvert(126);

    expect(actual).toEqual(expected);
});

test("timeConvert test02", () => {

    let problem = new ProblemSet();
    let expected = "0:45";

    let actual = problem.timeConvert(45);

    expect(actual).toEqual(expected);
});

test("countBigWords test01", () => {

    let problem = new ProblemSet();
    let expected = 0;

    let actual = problem.countBigWords("Hello World");

    expect(actual).toEqual(expected);
});

test("countBigWords test02", () => {

    let problem = new ProblemSet();
    let expected = 2;

    let actual = problem.countBigWords("Dallas Cowboys Suck Go Philedelphia Eagles");

    expect(actual).toEqual(expected);
});

test("countingBills test01", () => {

    let problem = new ProblemSet();
    const bills = [3, 0, 0, 0, 1, 2]
    let expected = 253;

    let actual = problem.countingBills(bills);

    expect(actual).toEqual(expected);
});

test("countingBills test02", () => {

    let problem = new ProblemSet();
    const bills = [1, 4, 1, 1, 0, 1]
    let expected = 151;

    let actual = problem.countingBills(bills);

    expect(actual).toEqual(expected);
});

test("flip test01", () => {

    let problem = new ProblemSet();
    let expected = "ZAZAAAZZ";

    // tests used the wrong method initially
    //let actual = problem.countingBills("AZAZZZAA");
    let actual = problem.flip("AZAZZZAA");

    expect(actual).toEqual(expected);

});

test("flip test02", () => {

    let problem = new ProblemSet();
    let expected = "AZAZZZAAZA";

    //let actual = problem.countingBills("ZAZAAAZZAZ");
    let actual = problem.flip("ZAZAAAZZAZ");

    expect(actual).toEqual(expected);

});

