import React from "react";
function Table(props) {
    return (
        <table class="table text-center">
            <thead>
                <tr>
                    <th className="p-3">id</th>
                    <th className="p-3">Name</th>
                    <th className="p-3">NumPhone</th>
                    <th className="p-3">Email</th>
                    <th className="p-3">Date</th>
                </tr>
            </thead>
            <tbody>
            {props.users.map((user) => (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.FullName}</td>
                    <td>{user.NumPhone}</td>
                    <td>{user.email}</td>
                    <td>{user.Date}</td>
                </tr>
            ))}
                
            </tbody>
        </table>
    );
}
export default Table;