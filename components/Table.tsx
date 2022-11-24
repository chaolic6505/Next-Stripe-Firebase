import { CheckIcon } from '@heroicons/react/outline';
import { Product } from '@stripe/firestore-stripe-payments';

interface Props {
  plans: Product[];
  selectedPlan: Product | null;
}

function Table({ plans, selectedPlan }: Props) {
  return (
    <table>
      <tbody className="divide-y divide-[gray]">
        <tr className="tableRow">
          <td className="tableDataTitle">Monthly price</td>
          {plans.map((plan) => (
            <td
              className={`tableDataFeature ${
                selectedPlan?.id === plan.id
                  ? 'text-[#E50914]'
                  : 'text-[gray]'
              }`}
              key={plan.id}
            >
              AED{plan.prices[0].unit_amount! / 100}
            </td>
          ))}
        </tr>
        <tr className="tableRow">
          <td className="tableDataTitle">Video quality</td>
          {plans.map((plan) => (
            <td
              className={`tableDataFeature ${
                selectedPlan?.id === plan.id ? 'text-[#E50914]' : 'text-[gray]'
              }`}
              key={plan.id}
            >
              {plan.metadata.videoQuality}
            </td>
          ))}
        </tr>
        <tr className="tableRow">
          <td className="tableDataTitle">Resolution</td>
          {plans.map((product) => (
            <td
              className={`tableDataFeature ${
                selectedPlan?.id === product.id
                  ? 'text-[#E50914]'
                  : 'text-[gray]'
              }`}
              key={product.id}
            >
              {product.metadata.resolution}
            </td>
          ))}
        </tr>
        <tr className="tableRow">
          <td className="tableDataTitle">
            Watch on your TV, computer, mobile phone and tablet
          </td>
          {plans.map((plan) => (
            <td
              className={`tableDataFeature ${
                selectedPlan?.id === plan.id ? 'text-[#E50914]' : 'text-[gray]'
              }`}
              key={plan.id}
            >
              {plan.metadata.portability === 'true' && (
                <CheckIcon className="inline-block h-8 w-8" />
              )}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
