type Props = {
  title?: string;
  desc?: string;
  api?: string;
  apiDesc?: string;
  apiUsages?: string;
  company?: string;
  notification?: string;
  comName?: string;
  not?: string;
};

const SubscriptionInfo = ({
  title,
  desc,
  api,
  apiDesc,
  apiUsages,
  company,
  notification,
  comName,
  not,
}: Props) => {
  return (
    <section className={` mx-auto w-5/6  md:h-full md:pb-0 border `}>
      <div className="py-7 px-8 flex flex-col gap-4">
        <div className="flex items-center gap-9">
          <p className="text-dark-20 font-bold text-xl w-[137px]">{title} </p>
          <span className="text-dark-20 text-xl font-light">{desc} </span>
        </div>
        <div className="flex items-center gap-9">
          <p className="text-dark-20 font-bold text-xl w-[137px]">{api}</p>
          <span className="text-dark-20 text-xl font-light">
            {apiDesc}
            <span className="text-purple-20 font-semibold text-[18px]">
              {apiUsages}
            </span>
          </span>
        </div>
      </div>

      {title === "name" && (
        <div className="py-7 px-8 flex flex-col gap-4">
          <div className="flex items-center gap-9">
            <p className="text-dark-20 font-bold text-xl w-[137px]">{title} </p>
            <span className="text-dark-20 text-xl font-light">{desc} </span>
          </div>
          <div className="flex items-center gap-9">
            <p className="text-dark-20 font-bold text-xl w-[137px]">{api}</p>
            <span className="text-dark-20 text-xl font-light">
              {apiDesc}
              <span className="text-purple-20 font-semibold text-[18px]">
                {apiUsages}
              </span>
            </span>
          </div>
          <div className="flex items-center gap-9">
            <p className="text-dark-20 font-bold text-xl w-[137px]">
              {company}{" "}
            </p>
            <span className="text-dark-20 text-xl font-light">{comName} </span>
          </div>
          <div className="flex items-center gap-9">
            <p className="text-dark-20 font-bold text-xl w-[137px]">
              {notification}{" "}
            </p>
            <span className="text-dark-20 text-xl font-light">{not} </span>
          </div>
        </div>
      )}
    </section>
  );
};

export default SubscriptionInfo;
