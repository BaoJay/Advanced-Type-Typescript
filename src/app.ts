const = fetchUserData = {
    id: 'u1',
    name: 'Bao',
    job: {
        title: 'CEO',
        description: 'My own company'
    }
}
//Access data by normal, if it’s available
console.log(fetchUserData.job.title)
// Access data by using optional chaining
console.log(fetchUserData?.job?.title)