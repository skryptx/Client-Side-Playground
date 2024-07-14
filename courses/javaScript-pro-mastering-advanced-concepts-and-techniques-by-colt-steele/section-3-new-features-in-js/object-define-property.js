let user = {
    name: "Sinni Singla",
    dept: "IT"
}

Object.defineProperty(user, "deptName", 
    {
        // value: "Hello",
        // writable: true, // bydefault false,
        get: function() {
            if(user.dept === "Hello") {
                return "Hello World";
            } 
            return "Bye Bye";
        },
        set: function(val) {
            user.deptName = val;
        }
    })
console.log(user.deptName)