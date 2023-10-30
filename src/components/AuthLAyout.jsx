import React, { useState, useEffect } from 'react'
import { UseSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
export default function Protected({
    children, authentication = true
}) {
    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = UseSelector(state => state.auth.status)

    return (
        <div>AuthLAyout</div>
    )
}
