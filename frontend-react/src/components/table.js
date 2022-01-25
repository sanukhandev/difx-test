import { Link } from "react-router-dom";

const Table = (props) => {
    const { data, columns } = props;
    return (
        <table className="min-w-full">
            <thead className="bg-white border-b">
                <tr>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        #
                    </th>
                    {
                        columns.map((column, index) => {
                            return (
                                <th scope="col" key={`column-head-index-${index}`} className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    {column.label}
                                </th>
                            )
                        })

                    }
                </tr>
            </thead>
            <tbody>
                {data.map((movie, index) => (
                    <tr className="bg-white" key={movie.id}>

                        <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                            {index + 1}
                        </td>
                        {
                            columns.map((column, index) => {
                                return (

                                    <td key={`column-index-${index}`} className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                                        <Link
                                            to={{
                                                pathname: `/slug/${movie.id}`,
                                            }}
                                        >{movie[column.field]}</Link>
                                    </td>
                                )
                            })
                        }
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;