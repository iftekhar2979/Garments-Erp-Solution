const RestTable = ({ options, size, sizeChange, defaultValue, total }) => {
  return (
    <>
      <table className='my-2'>
        <tbody>
          {options?.map((singleSize, i) => {
            return (
              <tr key={i}>
                <td>{singleSize}</td>
                <td>
                  <td
                    className='border w-20 bg-gray-200 text-center'
                    name={singleSize}
                  >
                    {defaultValue[singleSize]}
                  </td>
                </td>
              </tr>
            );
          })}
          <tr>
            <td className="w-12">Total : </td>
            <td className="font-bold"> {isNaN(total) ? 0 : total}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default RestTable;
