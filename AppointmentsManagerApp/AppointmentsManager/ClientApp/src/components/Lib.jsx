export const testData = [
    { id: 1, Title: "Title one", Description: "Description one", LevelOfImportance: 3, Date: "14-04-2023", Time: "17:32", Address: "Be 8500" },
   { id: 2, Title: "Title two", Description: "Description two", LevelOfImportance: 4, Date: "13-04-2023", Time: "13:32", Address: "Be 9000" },
   { id: 3, Title: "Title three", Description: "Description three", LevelOfImportance: 5, Date: "12-04-2023", Time: "10:32", Address: "Be 2000" },
   { id: 4, Title: "Title four", Description: "Description four", LevelOfImportance: 0, Date: "10-04-2023", Time: "19:09", Address: "Be 1000" },

]

const url = "api/appointment"

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

export const filter = {
    LevelOfImportance: null,
    All: false,
    Deleted: false,
    Done: false,
    StartDate: null,
    EndDate: null,
    SpecifiedDate: null,
    SpecifiedTime: null
};

export const activeId = {
    id:0
}
export async function getDefault(){
    const res = await fetch(url)

    if(!res.ok && res.status !== 200){
        console.log("It sucked at getting default data: ", res)
        //IZBACI ALERT
        return []
    }
    const result = await res.json()
    return result
    
}

export async function getAppointments(filter_){
    const res = await fetch(url + "/filters",{
        method: "POST",
        body: JSON.stringify(filter_),
        headers: {
            "content-type": "application/json"
        }
    })

    if(!res.ok){
        console.log("It sucked at gettings appointments with filters: ", res)
        //ALERT("Something went wrong, please clear filters and try again.")
        return []
    }

    return await res.json()
}

export async function postAppointment(newApp){
    const res = await fetch(url,{
        method:"POST",
        body:JSON.stringify(newApp),
        headers:{
            "content-type":"application/json"
        }
    })

    if(!res.ok){
        console.log("It sucked at creating new appointment: ", res)
        //IZBACI ALERT
        return {msg:res}
    }
    const result = await res.json()
    return result
    
}


export async function updateAppointment(updateApp){
    const res = await fetch(url + "/" + updateApp.id,{
        method:"PUT",
        body:JSON.stringify(updateApp),
        headers:{
            "content-type": "application/json"
        }
    })

    if(!res.ok){
        console.log("It sucked at updating appointment: ", res)
        //IZBACI ALERT
        return{msg:res}
    }
    return res
}

export async function deleteAppointment(id){
    const res = await fetch(url + "/" + id,{
        method:"DELETE"
    })

    if(!res.ok){
        console.log("It sucked at deleting appointment: ", res)
        //IZBACI ALERT
        return{msg:res}
    }
    return res
}

export function formatedDateToStr(d){
    const nd = d ? new Date(d) : new Date()
    const month_ = nd.getMonth() + 1;
    const monthStr = month_ > 9 ? month_ : 0 + "" + month_;
    const day_ = nd.getDate() > 9 ? nd.getDate() : 0 + "" + nd.getDate();
    return nd.getFullYear() + "-" + monthStr + "-" + day_;
}


export function formatedTimeToStr(d) {
    const nd = d ?  new Date(d) : new Date();
    const hr_ = nd.getHours() < 9 ? 0 + '' + nd.getHours() : nd.getHours()
    const min_ = nd.getMinutes() < 9 ? 0 + '' + nd.getMinutes() : nd.getMinutes()
    return hr_ + ':' + min_
}