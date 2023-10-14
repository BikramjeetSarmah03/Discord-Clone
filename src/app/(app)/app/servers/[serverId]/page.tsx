interface Props {
  params: {
    serverId: string;
  };
}

export default function ServerPage({ params: { serverId } }: Props) {
  return (
    <div>
      <h1>{serverId}</h1>
    </div>
  );
}
