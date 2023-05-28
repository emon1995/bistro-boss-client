import { Helmet } from "react-helmet-async";
import useCart from "../../hooks/useCart";

const MyCart = () => {
  const [cart] = useCart();
  const totalPrice = cart.reduce((sum, item) => item.price + sum, 0);

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | My Cart</title>
      </Helmet>
      <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center gap-3">
        <h3 className="text-3xl">Total Item: {cart.length}</h3>
        <h3 className="text-3xl">Total Price: {totalPrice}</h3>
        <button className="btn btn-warning btn-sm">Pay</button>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Food</th>
              <th>Item Name</th>
              <th>Item Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((row, index) => (
              <tr key={row._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={row?.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{row?.name}</td>
                <td>${row?.price}</td>
                <th>
                  <button className="btn btn-primary mr-2 btn-xs">Edit</button>
                  <button className="btn btn-warning btn-xs">Delete</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
