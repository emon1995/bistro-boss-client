import useAuth from "../../../hooks/useAuth";


const AdminHome = () => {
    const { user } = useAuth();

    return (
        <div>
            <h1 className="text-3xl">Hi, {user?.displayName}</h1>
        </div>
    );
};

export default AdminHome;