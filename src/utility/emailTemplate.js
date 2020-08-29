import _ from "lodash";

const emailTemplate = data => {
    const dataArray = [];
    for (let key in data) {
        dataArray.push({ key: _.capitalize(key), value: data[key] });
    }
    return {
        to: "yinonehever@gmail.com",
        subject: "New message from " + data.name,
        html: `${dataArray.map(item =>
            `<p><strong>${item.key}: </strong> ${item.value}</p>`)
            .join("")}`
    };
};

export default emailTemplate;