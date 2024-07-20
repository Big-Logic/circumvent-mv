interface SubHeadersParams {
  dt: string;
  description: string;
}

function SubHeader({ dt, description }: SubHeadersParams) {
  return (
    <div>
      <h3 className="text-base leading-6 font-medium">{dt}</h3>
      <p className="text-xs">{description}</p>
    </div>
  );
}

export default SubHeader;
