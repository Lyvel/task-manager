type Task = {
  completeBy: Date;
  completed: boolean;
  category: number;
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

type ServerSession = {
  user: {
    email: string;
    name: string;
    image: string;
  };
};

type Tasks = Task[];

type SP = {
  tasks: string;
  category: string;
  categoryName: string;
};

type Category = {
  id: number;
  email: string;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
};

type Categories = Category[];
