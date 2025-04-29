function generateRandomString(length = 20){
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    
    return result;
}
const serial = generateRandomString();
// First Refresh
console.log(serial); // 9cBcrg3kcWF4GZSlWXAM

// Second Refresh
console.log(serial); // vPeu6HXBgiXXj6jpch4P

// Third Refresh
console.log(serial); // RQuHFBjCdnp0Ghhp0544