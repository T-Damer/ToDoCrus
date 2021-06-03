// https://docs.mongodb.com/realm/tutorial/react-native/

static const schema = {
    name: "Task",
    properties: {
      _id: "objectId",
      _partition: "string?",
      name: "string",
      status: "string",
    },
    primaryKey: "_id",
  };