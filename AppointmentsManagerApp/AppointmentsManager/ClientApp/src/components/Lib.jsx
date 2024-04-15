export const testData = [
    { id: 1, Title: "Title one", Description: "Description one", LevelOfImportance: 3, Date: "14-04-2023", Time: "17:32", Address: "Be 8500" },
   { id: 2, Title: "Title two", Description: "Description two", LevelOfImportance: 4, Date: "13-04-2023", Time: "13:32", Address: "Be 9000" },
   { id: 3, Title: "Title three", Description: "Description three", LevelOfImportance: 5, Date: "12-04-2023", Time: "10:32", Address: "Be 2000" },
   { id: 4, Title: "Title four", Description: "Description four", LevelOfImportance: 0, Date: "10-04-2023", Time: "19:09", Address: "Be 1000" },

]


export const entry = {
    title: "Test title",
    description: "Test description",
    address: "Test address",
    date: new Date(),
    time: formatedTimeToStr(),
    done: false,
    deleted: false,
    levelOfImportance: 2,
}

export function formatedTimeToStr(d) {
    const nd = d ?  new Date(d) : new Date();
    const hr_ = nd.getHours() < 9 ? 0 + '' + nd.getHours() : nd.getHours()
    const min_ = nd.getMinutes() < 9 ? 0 + '' + nd.getMinutes() : nd.getMinutes()
    return hr_ + ':' + min_
}