function assignScheduleDate(schedule) {
        var sch = document.getElementsByClassName('schedule')
        for (var i=0;i<sch.length;i++){
            // var e = sch[i].innerHTML.split('{').filter(e => e.includes('}'))[0].split('}')[0]
            var words = sch[i].innerHTML.split('{')
            for (var j=0; j < words.length; j++)
            {
                if (words[j].match('}') != null){
                    
                    var daKey = words[j].split('}')[0]
                    // console.log(daKey)
                    Object.keys(schedule).forEach((e)=>{
                        if (schedule[e]==daKey) { 
                            words[j] = e
                            sch[i].innerHTML = words.join(' ')
                        }

                    })
                    // console.log(e[j].split('}')[0])
                }
            }
        }
}