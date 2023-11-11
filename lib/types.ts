type Task = {
  completeBy: string;
  completed: boolean;
  createdAt: Date;
  description: string;
  email: string;
  id: number;
  important: boolean;
  title: string;
  updatedAt: Date;
};

type Session = {
  serverSession: {
    user: {
      email: string;
      name: string;
      image: string;
    };
  };
};
