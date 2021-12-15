import React from 'react'

const Item = ({ item }) => {
    return (
        <li>{item.attributes.content}</li>
    )
}

export default Item