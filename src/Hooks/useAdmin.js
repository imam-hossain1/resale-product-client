import { useEffect, useState } from "react"

const useAdmin= email => {
    const [isAdmin, setIsAdmin] = useState(false);
    // const [isAdminLoading, setIsAdminLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/admin/${email}`)
            // fetch(`http://localhost:5000/users/seller/d@da.com`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsAdmin(data.isAdmin);
                    // setIsAdminLoading(false);
                })
        }
    }, [email])
    // return [isAdmin, isAdminLoading]
    return [isAdmin]
}

export default useAdmin;