import fetch from "node-fetch";

const url = "https://www.vinted.fr/api/v2/notifications?page=1&per_page=5"
const urlVinted = "https://www.vinted.nl"
const apiVinted = "/api/v2/"

function getCookie(cookies: string, name: string): string | false{
    var pattern = RegExp(name + "=.[^;]*")
    var matched = cookies.match(pattern)
    if(matched){
        var cookie = matched[0].split('=')
        return cookie[1]
    }
    return false
}

    
async function sessionGrab() {
    const response = await fetch(urlVinted)
    const data = response.headers.get("set-cookie")
    const sessionId = getCookie(data, "_vinted_fr_session")
    return sessionId
}

(async () => {
    const data = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "eyJraWQiOiJFNTdZZHJ1SHBsQWp1MmNObzFEb3JIM2oyN0J1NS1zX09QNVB3UGlobjVNIiwiYWxnIjoiUFMyNTYifQ.eyJhcHBfaWQiOjQsImNsaWVudF9pZCI6IndlYiIsInN1YiI6MTk4MjEyMjIwLCJpYXQiOjE3MTU5NzYxMjQsInNpZCI6ImFhZDIwMjk2LTE3MTU5NzYxMjQiLCJzY29wZSI6InVzZXIiLCJhY3QiOnsic3ViIjoxOTgyMTIyMjB9LCJleHAiOjE3MTU5ODMzMjR9.BQmn2kp_MIbxHPgUF0zhmBBPdRLCYOBbOXryjbXmVpKwbsdSBNQc_aodTQIOVPY9o5Do_8r08ivyGLEgX_oxEtiwN-Ohrlcn9Y8yZx7lzXI3pjlCpip_FFpNC1W2jJ3N5cwxqGlnKLO5ntwo9_5_yE6x0fo9SNcpK_fPI-qb_K4mE2at5VH1tetokkrUTIRU2hzZAxgXgQEtZF4iPi1Md4-NvD2oTXrSvuHMXjf0mjhWBB9XGmZ0i2HDhytYw6hyW-qvNrMfvfOTPCyCm4_8WQkeQnSeXeV15_oeA93Pl4pcDeeaUxxXjcUQbhJmY9nNLYR8QZcsfCho5OWho6W13g",
            "Cookie": `_vinted_fr_session=${await sessionGrab()}`,
        },
    }

    const notificationFetch = await fetch(url, data)
    const notificationData = await notificationFetch.json()
    console.log(notificationData)
})()