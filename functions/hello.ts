import 'source-map-support/register';

export const handler = async (event: unknown, context: unknown) => {
  console.log(event);
  console.log(context);
};
