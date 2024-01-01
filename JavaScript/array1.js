// n = ["ram", "hari", "gopal"]
// l=n.length
// for(i=0;i<l;i++){
//     console.log(n[i])
// }
// array=[, , ]
// object=> {key:value, key:value, key:value,... ,...object..}
// eg=>

student = [
    {
        roll: "1",
        names: "Ram Dhakal",
        address: "Kathmandu",
        moible: "984214"
    },
    {
        roll: "12",
        names: "Ganesh",
        address: "Kathmandu",
        moible: "984214"
    },
    {
        roll: "45",
        names: "Prabhat",
        address: "Janakpur",
        moible: "985421"
    }
]
l = student.length;
document.write(`<table border=1>`)
document.write(`
<tr> 
    <th>Roll No </th> 
    <th> Name of Student </th>  
    <th> Address </th> 
 </tr>`)
for (i = 0; i < l; i++) {
    document.write(`<tr>`)
    document.write(`<td> ${student[i].roll} </td>  <td> ${student[i].names} </td> <td> ${student[i].address} </td> `)
    document.write(`</tr>`)
}
document.write(`</table>`)





