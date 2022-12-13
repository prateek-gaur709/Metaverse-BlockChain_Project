const Plane = () => {
  return (
    <mesh position={[0, 0, 0]}>
      <planeBufferGeometry attach='geometry' args={[150, 150]} />
      <meshStandardMaterial color={'#68bd56'} />
    </mesh>
  );
};

export default Plane;
