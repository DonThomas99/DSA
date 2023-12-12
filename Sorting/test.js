class hashtable 
{
    constructor(size)
    {
        this.table = new Array[size]
        this.size = size
    }
    hash(key)
    {
        let total 
        for(i=0;i<key.length;i++)
        {
            total += charCodeAt(i)
        }
        return total % this.size 
    }
    set(key,value)
    {
        const index = hash(key)
        const bucket = this.table[index]
        if(!bucket)
        {
            this.table[index] = [[key,value]]
        }
        else{
            const samekeyitem = bucket.find(item=>item[0]===key)
            if(samekeyitem)
            {
                samekeyitem[1] = value
            }
            else{
                bucket.push([key,value])
            }

        }
    }

    get(key)
    {
        
    }
}